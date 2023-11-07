# `data_google_compute_network_endpoint_group`

Refer to the Terraform Registory for docs: [`data_google_compute_network_endpoint_group`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/compute_network_endpoint_group).

# `dataGoogleComputeNetworkEndpointGroup` Submodule <a name="`dataGoogleComputeNetworkEndpointGroup` Submodule" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeNetworkEndpointGroup <a name="DataGoogleComputeNetworkEndpointGroup" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/compute_network_endpoint_group google_compute_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroup } from '@cdktf/provider-google'

new dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup(scope: Construct, id: string, config?: DataGoogleComputeNetworkEndpointGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig">DataGoogleComputeNetworkEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig">DataGoogleComputeNetworkEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetSelfLink">resetSelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSelfLink` <a name="resetSelfLink" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetSelfLink"></a>

```typescript
public resetSelfLink(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isConstruct"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroup } from '@cdktf/provider-google'

dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformElement"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroup } from '@cdktf/provider-google'

dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroup } from '@cdktf/provider-google'

dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroup } from '@cdktf/provider-google'

dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComputeNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeNetworkEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/compute_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.defaultPort">defaultPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.selfLinkInput">selfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `defaultPort`<sup>Required</sup> <a name="defaultPort" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.defaultPort"></a>

```typescript
public readonly defaultPort: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `selfLinkInput`<sup>Optional</sup> <a name="selfLinkInput" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.selfLinkInput"></a>

```typescript
public readonly selfLinkInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeNetworkEndpointGroupConfig <a name="DataGoogleComputeNetworkEndpointGroupConfig" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.Initializer"></a>

```typescript
import { dataGoogleComputeNetworkEndpointGroup } from '@cdktf/provider-google'

const dataGoogleComputeNetworkEndpointGroupConfig: dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/compute_network_endpoint_group#id DataGoogleComputeNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/compute_network_endpoint_group#project DataGoogleComputeNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.selfLink">selfLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/compute_network_endpoint_group#self_link DataGoogleComputeNetworkEndpointGroup#self_link}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.zone">zone</a></code> | <code>string</code> | Zone where the network endpoint group is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/compute_network_endpoint_group#id DataGoogleComputeNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/compute_network_endpoint_group#name DataGoogleComputeNetworkEndpointGroup#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/compute_network_endpoint_group#project DataGoogleComputeNetworkEndpointGroup#project}.

---

##### `selfLink`<sup>Optional</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/compute_network_endpoint_group#self_link DataGoogleComputeNetworkEndpointGroup#self_link}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Zone where the network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/data-sources/compute_network_endpoint_group#zone DataGoogleComputeNetworkEndpointGroup#zone}

---



