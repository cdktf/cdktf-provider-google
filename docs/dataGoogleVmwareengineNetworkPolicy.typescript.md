# `dataGoogleVmwareengineNetworkPolicy` Submodule <a name="`dataGoogleVmwareengineNetworkPolicy` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineNetworkPolicy <a name="DataGoogleVmwareengineNetworkPolicy" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/vmwareengine_network_policy google_vmwareengine_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

new dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy(scope: Construct, id: string, config: DataGoogleVmwareengineNetworkPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig">DataGoogleVmwareengineNetworkPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig">DataGoogleVmwareengineNetworkPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isConstruct"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleVmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineNetworkPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineNetworkPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/vmwareengine_network_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineNetworkPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.edgeServicesCidr">edgeServicesCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.externalIp">externalIp</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList">DataGoogleVmwareengineNetworkPolicyExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.internetAccess">internetAccess</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList">DataGoogleVmwareengineNetworkPolicyInternetAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical">vmwareEngineNetworkCanonical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `edgeServicesCidr`<sup>Required</sup> <a name="edgeServicesCidr" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.edgeServicesCidr"></a>

```typescript
public readonly edgeServicesCidr: string;
```

- *Type:* string

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.externalIp"></a>

```typescript
public readonly externalIp: DataGoogleVmwareengineNetworkPolicyExternalIpList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList">DataGoogleVmwareengineNetworkPolicyExternalIpList</a>

---

##### `internetAccess`<sup>Required</sup> <a name="internetAccess" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.internetAccess"></a>

```typescript
public readonly internetAccess: DataGoogleVmwareengineNetworkPolicyInternetAccessList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList">DataGoogleVmwareengineNetworkPolicyInternetAccessList</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.vmwareEngineNetwork"></a>

```typescript
public readonly vmwareEngineNetwork: string;
```

- *Type:* string

---

##### `vmwareEngineNetworkCanonical`<sup>Required</sup> <a name="vmwareEngineNetworkCanonical" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical"></a>

```typescript
public readonly vmwareEngineNetworkCanonical: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineNetworkPolicyConfig <a name="DataGoogleVmwareengineNetworkPolicyConfig" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

const dataGoogleVmwareengineNetworkPolicyConfig: dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.location">location</a></code> | <code>string</code> | The resource name of the location (region) to create the new network policy in. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.name">name</a></code> | <code>string</code> | The ID of the Network Policy. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/vmwareengine_network_policy#id DataGoogleVmwareengineNetworkPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/vmwareengine_network_policy#project DataGoogleVmwareengineNetworkPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The resource name of the location (region) to create the new network policy in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/vmwareengine_network_policy#location DataGoogleVmwareengineNetworkPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the Network Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/vmwareengine_network_policy#name DataGoogleVmwareengineNetworkPolicy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/vmwareengine_network_policy#id DataGoogleVmwareengineNetworkPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/vmwareengine_network_policy#project DataGoogleVmwareengineNetworkPolicy#project}.

---

### DataGoogleVmwareengineNetworkPolicyExternalIp <a name="DataGoogleVmwareengineNetworkPolicyExternalIp" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIp.Initializer"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

const dataGoogleVmwareengineNetworkPolicyExternalIp: dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIp = { ... }
```


### DataGoogleVmwareengineNetworkPolicyInternetAccess <a name="DataGoogleVmwareengineNetworkPolicyInternetAccess" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccess.Initializer"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

const dataGoogleVmwareengineNetworkPolicyInternetAccess: dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccess = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineNetworkPolicyExternalIpList <a name="DataGoogleVmwareengineNetworkPolicyExternalIpList" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

new dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference <a name="DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

new dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIp">DataGoogleVmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineNetworkPolicyExternalIp;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyExternalIp">DataGoogleVmwareengineNetworkPolicyExternalIp</a>

---


### DataGoogleVmwareengineNetworkPolicyInternetAccessList <a name="DataGoogleVmwareengineNetworkPolicyInternetAccessList" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

new dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference <a name="DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineNetworkPolicy } from '@cdktf/provider-google'

new dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccess">DataGoogleVmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineNetworkPolicyInternetAccess;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPolicy.DataGoogleVmwareengineNetworkPolicyInternetAccess">DataGoogleVmwareengineNetworkPolicyInternetAccess</a>

---



