# `dataGoogleMonitoringUptimeCheckIps` Submodule <a name="`dataGoogleMonitoringUptimeCheckIps` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringUptimeCheckIps <a name="DataGoogleMonitoringUptimeCheckIps" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_uptime_check_ips google_monitoring_uptime_check_ips}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer"></a>

```typescript
import { dataGoogleMonitoringUptimeCheckIps } from '@cdktf/provider-google'

new dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps(scope: Construct, id: string, config?: DataGoogleMonitoringUptimeCheckIpsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig">DataGoogleMonitoringUptimeCheckIpsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig">DataGoogleMonitoringUptimeCheckIpsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleMonitoringUptimeCheckIps resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct"></a>

```typescript
import { dataGoogleMonitoringUptimeCheckIps } from '@cdktf/provider-google'

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement"></a>

```typescript
import { dataGoogleMonitoringUptimeCheckIps } from '@cdktf/provider-google'

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource"></a>

```typescript
import { dataGoogleMonitoringUptimeCheckIps } from '@cdktf/provider-google'

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.generateConfigForImport"></a>

```typescript
import { dataGoogleMonitoringUptimeCheckIps } from '@cdktf/provider-google'

dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleMonitoringUptimeCheckIps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleMonitoringUptimeCheckIps to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleMonitoringUptimeCheckIps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_uptime_check_ips#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringUptimeCheckIps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.uptimeCheckIps">uptimeCheckIps</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `uptimeCheckIps`<sup>Required</sup> <a name="uptimeCheckIps" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.uptimeCheckIps"></a>

```typescript
public readonly uptimeCheckIps: DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIps.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringUptimeCheckIpsConfig <a name="DataGoogleMonitoringUptimeCheckIpsConfig" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.Initializer"></a>

```typescript
import { dataGoogleMonitoringUptimeCheckIps } from '@cdktf/provider-google'

const dataGoogleMonitoringUptimeCheckIpsConfig: dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_uptime_check_ips#id DataGoogleMonitoringUptimeCheckIps#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_uptime_check_ips#id DataGoogleMonitoringUptimeCheckIps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps.Initializer"></a>

```typescript
import { dataGoogleMonitoringUptimeCheckIps } from '@cdktf/provider-google'

const dataGoogleMonitoringUptimeCheckIpsUptimeCheckIps: dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer"></a>

```typescript
import { dataGoogleMonitoringUptimeCheckIps } from '@cdktf/provider-google'

new dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get"></a>

```typescript
public get(index: number): DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference <a name="DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer"></a>

```typescript
import { dataGoogleMonitoringUptimeCheckIps } from '@cdktf/provider-google'

new dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringUptimeCheckIps.DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps">DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps</a>

---



